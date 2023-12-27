import { FormEvent } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const FormSchema = z.object({
	name: z
		.string({
			required_error: "Name is required",
			invalid_type_error: "Name must be a string",
		})
		.min(2, {
			message: "Name must be at least 2 characters.",
		}),
	email: z
		.string({
			required_error: "Email is required",
			invalid_type_error: "Email must be a string",
		})
		.email({
			message: "Please enter a valid email address (example@domain.com).",
		}),
	message: z
		.string({
			required_error: "Message is required",
			invalid_type_error: "Message must be a string",
		})
		.max(5000, {
			message: "Message must not be empty.",
		}),
});

const ContactForm = () => {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
	});
	const { isValid, isLoading } = form.formState;

	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		if (isValid) {
			await form.trigger();
		} else {
			e.preventDefault();
		}
	};

	return (
		<Form {...form}>
			<form
				action={import.meta.env.VITE_FORMSUBMIT_URL}
				method="POST"
				onSubmit={onSubmit}
				target="_blank"
				className="flex flex-col space-y-6 mt-10 dark:text-black"
			>
				{/* NAME */}
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input
									inputMode="text"
									placeholder="Enter Your Name"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{/* EMAIL */}
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									inputMode="email"
									placeholder="Enter Your Email"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{/* MESSAGE */}
				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Message</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Please leave your message here..."
									{...field}
									className="min-h-60 resize-none"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					type="submit"
					disabled={!isValid || isLoading}
					className="disabled:opacity-20"
				>
					Submit
				</Button>
			</form>
		</Form>
	);
};
export default ContactForm;
