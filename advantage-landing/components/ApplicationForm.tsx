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

type FormData = z.infer<typeof formSchema>;

export default function ApplicationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    // Simulate submission (UI only for now)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form data:", data);
    setIsSubmitted(true);
    reset();
  };

  if (isSubmitted) {
    return (
      <div className="glass rounded-2xl p-8 md:p-12 text-center max-w-2xl mx-auto">
        <div className="text-6xl mb-4">✅</div>
        <h3 className="text-2xl font-bold mb-4">¡Solicitud Recibida!</h3>
        <p className="text-gray-400 mb-6">
          Nos pondremos en contacto contigo por WhatsApp en las próximas 24
          horas para coordinar los siguientes pasos.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="text-advantage-gold hover:underline"
        >
          Enviar otra solicitud
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="glass rounded-2xl p-8 md:p-12 max-w-2xl mx-auto"
    >
      <h3 className="text-3xl font-bold mb-8 text-center">
        Aplica al Programa
      </h3>

      {/* Rol Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-3">
          Soy <span className="text-advantage-gold">*</span>
        </label>
        <div className="flex gap-4">
          <label className="flex-1 cursor-pointer">
            <input
              type="radio"
              value="Estudiante"
              {...register("rol")}
              className="sr-only peer"
            />
            <div className="glass rounded-lg p-4 text-center transition-all peer-checked:border-2 peer-checked:border-advantage-gold peer-checked:bg-advantage-gold/10 hover:border-gray-600">
              <span className="text-2xl block mb-2">🎓</span>
              <span className="font-medium">Estudiante</span>
            </div>
          </label>
          <label className="flex-1 cursor-pointer">
            <input
              type="radio"
              value="Padre/Madre"
              {...register("rol")}
              className="sr-only peer"
            />
            <div className="glass rounded-lg p-4 text-center transition-all peer-checked:border-2 peer-checked:border-advantage-gold peer-checked:bg-advantage-gold/10 hover:border-gray-600">
              <span className="text-2xl block mb-2">👨‍👩‍👧‍👦</span>
              <span className="font-medium">Padre/Madre</span>
            </div>
          </label>
        </div>
        {errors.rol && (
          <p className="text-red-400 text-sm mt-2">{errors.rol.message}</p>
        )}
      </div>

      {/* Nombre */}
      <div className="mb-6">
        <label htmlFor="nombre" className="block text-sm font-medium mb-2">
          Nombre completo <span className="text-advantage-gold">*</span>
        </label>
        <input
          id="nombre"
          type="text"
          {...register("nombre")}
          placeholder="Ej: Juan Pérez"
          className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-advantage-gold transition-colors"
        />
        {errors.nombre && (
          <p className="text-red-400 text-sm mt-2">{errors.nombre.message}</p>
        )}
      </div>

      {/* Celular */}
      <div className="mb-6">
        <label htmlFor="celular" className="block text-sm font-medium mb-2">
          Celular (WhatsApp) <span className="text-advantage-gold">*</span>
        </label>
        <div className="flex gap-2">
          <div className="px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-500">
            +51
          </div>
          <input
            id="celular"
            type="tel"
            {...register("celular")}
            placeholder="987654321"
            className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-advantage-gold transition-colors"
          />
        </div>
        {errors.celular && (
          <p className="text-red-400 text-sm mt-2">{errors.celular.message}</p>
        )}
      </div>

      {/* Motivación (Optional) */}
      <div className="mb-8">
        <label htmlFor="motivacion" className="block text-sm font-medium mb-2">
          ¿Por qué quieres unirte al programa? (Opcional)
        </label>
        <textarea
          id="motivacion"
          {...register("motivacion")}
          rows={4}
          placeholder="Cuéntanos qué te motiva..."
          className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-advantage-gold transition-colors resize-none"
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
        className="w-full btn-cta px-8 py-4 rounded-lg font-semibold text-lg touch-target disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Enviando..." : "Enviar Solicitud"}
      </button>

      <p className="text-center text-gray-500 text-sm mt-4">
        Al enviar, aceptas que nos comuniquemos contigo por WhatsApp
      </p>
    </form>
  );
}
