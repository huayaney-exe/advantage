"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  rol: z.enum(["Estudiante", "Padre/Madre"], {
    required_error: "Por favor selecciona un rol",
  }),
  nombre: z
    .string()
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .max(100, "El nombre es demasiado largo"),
  celular: z
    .string()
    .regex(/^9\d{8}$/, "Ingresa un celular válido (ej: 987654321)"),
  motivacion: z.string().max(500, "Máximo 500 caracteres").optional(),
});

type ApplicationFormData = z.infer<typeof formSchema>;

export default function ApplicationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: ApplicationFormData) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form data:", data);
    setIsSubmitted(true);
    setTimeout(() => {
      reset();
      setIsSubmitted(false);
    }, 5000);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto bg-white/5 border border-[#47FFBF]/30 rounded-2xl p-12 text-center">
        <div className="text-6xl mb-6">✅</div>
        <h3 className="text-3xl font-bold mb-4">¡Solicitud Recibida!</h3>
        <p className="text-gray-400 text-lg mb-6">
          Nos pondremos en contacto contigo por WhatsApp en las próximas 24
          horas para coordinar los siguientes pasos.
        </p>
        <div className="inline-flex items-center gap-2 text-[#47FFBF]">
          <span className="animate-pulse">●</span>
          <span className="text-sm">Cerrando automáticamente...</span>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8"
    >
      {/* Rol Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-3 text-gray-300">
          Soy <span className="text-[#F59E0B]">*</span>
        </label>
        <div className="grid grid-cols-2 gap-4">
          {[
            { value: "Estudiante", icon: "🎓", label: "Estudiante" },
            { value: "Padre/Madre", icon: "👨‍👩‍👧‍👦", label: "Padre/Madre" },
          ].map((option) => (
            <label key={option.value} className="cursor-pointer">
              <input
                type="radio"
                value={option.value}
                {...register("rol")}
                className="sr-only peer"
              />
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center transition-all peer-checked:border-[#F59E0B] peer-checked:bg-[#F59E0B]/10 hover:bg-white/10">
                <span className="text-3xl block mb-2">{option.icon}</span>
                <span className="font-medium">{option.label}</span>
              </div>
            </label>
          ))}
        </div>
        {errors.rol && (
          <p className="text-red-400 text-sm mt-2">{errors.rol.message}</p>
        )}
      </div>

      {/* Nombre */}
      <div className="mb-6">
        <label htmlFor="nombre" className="block text-sm font-medium mb-2 text-gray-300">
          Nombre completo <span className="text-[#F59E0B]">*</span>
        </label>
        <input
          id="nombre"
          type="text"
          {...register("nombre")}
          placeholder="Ej: Juan Pérez"
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#F59E0B] transition-colors text-white placeholder-gray-500"
        />
        {errors.nombre && (
          <p className="text-red-400 text-sm mt-2">{errors.nombre.message}</p>
        )}
      </div>

      {/* Celular */}
      <div className="mb-6">
        <label htmlFor="celular" className="block text-sm font-medium mb-2 text-gray-300">
          Celular (WhatsApp) <span className="text-[#F59E0B]">*</span>
        </label>
        <div className="flex gap-2">
          <div className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-gray-400 flex items-center">
            +51
          </div>
          <input
            id="celular"
            type="tel"
            {...register("celular")}
            placeholder="987654321"
            className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#F59E0B] transition-colors text-white placeholder-gray-500"
          />
        </div>
        {errors.celular && (
          <p className="text-red-400 text-sm mt-2">{errors.celular.message}</p>
        )}
      </div>

      {/* Motivación */}
      <div className="mb-8">
        <label htmlFor="motivacion" className="block text-sm font-medium mb-2 text-gray-300">
          ¿Por qué quieres unirte al programa? <span className="text-gray-500">(Opcional)</span>
        </label>
        <textarea
          id="motivacion"
          {...register("motivacion")}
          rows={4}
          placeholder="Cuéntanos qué te motiva..."
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#F59E0B] transition-colors resize-none text-white placeholder-gray-500"
        />
        {errors.motivacion && (
          <p className="text-red-400 text-sm mt-2">
            {errors.motivacion.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-4 bg-[#47FFBF] text-black font-semibold rounded-lg hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
      >
        {isSubmitting ? "Enviando..." : "Enviar Solicitud"}
      </button>

      <p className="text-center text-gray-500 text-sm mt-4">
        Al enviar, aceptas que nos comuniquemos contigo por WhatsApp
      </p>
    </form>
  );
}
