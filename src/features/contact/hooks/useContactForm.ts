import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export interface ContactFormState {
    name: string;
    email: string;
    company: string;
    service: string;
    urgency: string;
    message: string;
}

export interface ContactFormStatus {
    type: "success" | "error" | null;
    message: string | null;
}

const initialFormState: ContactFormState = {
    name: "",
    email: "",
    company: "",
    service: "",
    urgency: "normal",
    message: ""
};

export function useContactForm() {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState<ContactFormStatus>({ type: null, message: null });
    const [formState, setFormState] = useState<ContactFormState>(initialFormState);

    const updateField = (field: keyof ContactFormState, value: string) => {
        setFormState(prev => ({ ...prev, [field]: value }));
    };

    const resetForm = () => {
        setFormState(initialFormState);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setIsSending(true);
        setStatus({ type: null, message: null });

        try {
            const result = await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY"
            );

            if (result.text === "OK") {
                setStatus({
                    type: "success",
                    message: "¡Gracias por contactar a Caycer! Hemos recibido tu solicitud y te contactaremos pronto."
                });
                resetForm();
            }
        } catch (error) {
            console.error("EmailJS Error:", error);
            setStatus({
                type: "error",
                message: "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo o contáctanos directamente."
            });
        } finally {
            setIsSending(false);
        }
    };

    return {
        formRef,
        formState,
        status,
        isSending,
        updateField,
        handleSubmit
    };
}
