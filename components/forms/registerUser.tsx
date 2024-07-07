'use client'

import { z } from "zod";
import Link from "next/link";
import { useState, useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, SubmitHandler } from "react-hook-form";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { LogoVerde, LogoSobre, IconKey, IconPasswordCloset, IconPasswordOpen, IconGoogle, IconFacebook } from "@/icons/icons";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import ReCAPTCHA from "react-google-recaptcha";

//  zod
const formSchema = z.object({
    fullname: z.string().min(6, { message: "Ingrese su Nombre y Apellido" }).max(50),
    email: z.string().email({ message: "Ingrese un email Valido" }),
    phone: z.string().min(9, { message: "El numero telefonico debe tener minimo 9 digitos" }),
    password: z.string().min(6, { message: "Su Password debe tener minimo 6 Caracteres" }),
    confirmPassword: z.string().min(6, { message: "confirme su Password" }),
    terminos: z.boolean().refine(val => val === true, { message: "Debes aceptar Terminos y Condiciones" }),
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords no coiciden",
    path: ["confirmPassword"],
});
// Key 

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '';

// fin zod

export default function RegisterUser() {
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

    // 
    const handleRecaptchaLoaded = () => {
        console.log('reCAPTCHA loaded successfully');
    };
    const handleRecaptchaChange = (token: string | null) => {
        setRecaptchaToken(token);
    };
    // 
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    // 
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullname: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
            terminos: false,
        }
    })
    // 
    const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (data) => {
        //
        if (!recaptchaToken) {
            console.error('Debe completar la validación de ReCAPTCHA');
            return;
        }
        //
        setIsSubmitting(true);
        //
        const names = data.fullname.split(' ');
        const firstName = names[0];
        const lastName = names.slice(1).join(' ');
        const payload = {
            firstName,
            lastName,
            email: data.email,
            phone: data.phone,
            password: data.password,
        };
        console.log('esto son los datos del registro', payload)
        // en este caso usamos dos punto simboiza retroceder de ruta para entrar a la api/register
        try {
            const res = await fetch('../api/register', {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "application/json",
                }
            });

            if (res.ok) {
                const respuesta = await res.json();
                toast.success("Registro exitoso");
                // Reset form or redirect to another page
                form.reset();
            } else {
                const error = await res.json();
                toast.error(error.message || "Ocurrió un error al registrarse");
            }
        } catch (error) {
            console.log(error);
            toast.error("Ocurrió un error al intentar registrarse");
        } finally {
            setIsSubmitting(false);
        }
    };
    // 
    return (
        <div className="flex flex-col items-center gap-8 p-4 md:p-8 lg:p-12 self-stretch grow shrink basis-0 justify-start ">
            <div>
                <LogoVerde width={500} height={100} />
            </div>
            <h1 className="text-center text-black text-[32px] md:text-[38px] font-medium">Crea tu Cuenta</h1>
            <h2 className="text-black text-[20px] md:text-[22px] font-medium">Por favor, ingresa los datos requeridos</h2>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="fullname"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel htmlFor="fullname" className="ml-2">Nombre y Apellido</FormLabel>
                                <FormControl>
                                    <Input
                                        id="fullname"
                                        placeholder="Ingresa tu Nombre y Apellido"
                                        {...field}
                                        className="w-full md:w-[400px] lg:w-[506px] h-[45px] px-4 py-3 bg-white rounded-xl border border-orange-400"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel htmlFor="email" className="ml-2">Email</FormLabel>
                                <div className="relative">
                                    <Input
                                        id="email"
                                        placeholder="Ingresa tu Email"
                                        {...field}
                                        className="w-full md:w-[400px] lg:w-[506px] h-[45px] px-4 py-3 bg-white rounded-xl border border-orange-400 pl-12"
                                    />
                                    <LogoSobre className="absolute top-1/2 left-3 transform -translate-y-1/2" width={20} height={20} />
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel htmlFor="phone" className="ml-2">Telefono</FormLabel>
                                <div className="relative">
                                    <Input
                                        id="phone"
                                        placeholder="Ingresa tu Teléfono"
                                        {...field}
                                        className="w-full md:w-[400px] lg:w-[506px] h-[45px] px-4 py-3 bg-white rounded-xl border border-orange-400 pl-12"
                                    />
                                    {/* <LogoSobre className="absolute top-1/2 left-3 transform -translate-y-1/2" width={20} height={20} /> */}
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel htmlFor="password" className="ml-2">Contraseña</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Input
                                            id="password"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Ingresa tu contraseña"
                                            {...field}
                                            className="w-full md:w-[400px] lg:w-[506px] h-[45px] px-4 py-3 bg-white rounded-xl border border-orange-400 pl-12 pr-10"
                                        />
                                        <IconKey className="absolute top-1/2 left-3 transform -translate-y-1/2" width={20} height={20} />
                                        {showPassword ? (
                                            <IconPasswordOpen
                                                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                                                width={20}
                                                height={20}
                                                onClick={togglePasswordVisibility}
                                            />
                                        ) : (
                                            <IconPasswordCloset
                                                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                                                width={20}
                                                height={20}
                                                onClick={togglePasswordVisibility}
                                            />
                                        )}
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel htmlFor="confirmPassword" className="ml-2">Confirmar Contraseña</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Input
                                            id="confirmPassword"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Ingresa tu contraseña"
                                            {...field}
                                            className="w-full md:w-[400px] lg:w-[506px] h-[45px] px-4 py-3 bg-white rounded-xl border border-orange-400 pl-12 pr-10"
                                        />
                                        <IconKey className="absolute top-1/2 left-3 transform -translate-y-1/2" width={20} height={20} />
                                        {showPassword ? (
                                            <IconPasswordOpen
                                                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                                                width={20}
                                                height={20}
                                                onClick={togglePasswordVisibility}
                                            />
                                        ) : (
                                            <IconPasswordCloset
                                                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                                                width={20}
                                                height={20}
                                                onClick={togglePasswordVisibility}
                                            />
                                        )}
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex items-center">
                        <FormField
                            control={form.control}
                            name="terminos"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Checkbox
                                            id="terminos"
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                            className="text-black bg-white border border-orange-400"
                                        />
                                    </FormControl>
                                    <FormLabel htmlFor="terminos" className="text-black text-lg font-normal ml-2">Aceptar{" "}
                                        <Link
                                            href="/termsandconditions"
                                            target="_blank"
                                            className="text-orange-400 text-lg font-normal"
                                        >
                                            Términos y Condiciones
                                        </Link>{" "}</FormLabel>
                                    <FormMessage />

                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        {/*  */}
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey={SITE_KEY}
                            onLoad={handleRecaptchaLoaded}
                            onChange={handleRecaptchaChange}
                            className="mb-4"
                        />
                        <button
                            disabled={isSubmitting}
                            className="w-full md:w-[400px] lg:w-[506px] h-[45px] px-4 py-3 bg-orange-400 text-white rounded-xl border border-orange-400 flex items-center justify-center">
                            {isSubmitting ? "Registrando..." : "Registrar"}
                        </button>
                        {/*  */}
                        <div className="flex justify-between w-full md:w-[400px] lg:w-[506px]">
                            <p className="text-left">¿Ya tenés una cuenta?</p>
                            <p className="text-right text-orange-400"><Link href="/auth/login">Ingresa Aqui</Link></p>
                        </div>
                        <div className="flex justify-around gap-10 mt-4">
                            <IconGoogle width={64} height={64} />
                            <IconFacebook width={64} height={64} />
                        </div>
                    </div>
                </form>
            </Form>
        </div>
    )
}