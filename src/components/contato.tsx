import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import wpp from '../assets/wpp.svg'

const contataMe = z.object({
  nome: z.string().min(3, 'Informe seu nome corretamente'),
  empresa: z.string(),
  email: z.string().email(),
  text: z.string(),
})

export type ContateMeForm = z.infer<typeof contataMe>
export const Contato = () => {
  const { register, handleSubmit, reset } = useForm<ContateMeForm>({
    resolver: zodResolver(contataMe),
  })

  const onSubmit = (data: ContateMeForm) => {
    const { nome, empresa, text } = data

    // Mensagem personalizada para o WhatsApp
    const message = `Olá, sou ${nome}, da empresa ${empresa}. \n\n${text}`

    // Formatação da URL do WhatsApp
    const whatsappUrl = `https://api.whatsapp.com/send?phone=+5512981326766&text=${encodeURIComponent(message)}`

    // Redireciona o usuário para o WhatsApp com a mensagem pronta
    window.open(whatsappUrl, '_blank')

    reset()
  }

  return (
    <div className="relative w-[80vw]  mx-auto overflow-hidden">
      <h1 className="text-center font-dosis text-3xl mb-10">
        Preencha o formulário
      </h1>
      <form
        className="max-w-md mx-auto p-2 flex flex-col gap-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            id="nome"
            className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            {...register('nome')}
          />
          <label
            htmlFor="nome"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Nome
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            id="empresa"
            className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            {...register('empresa')}
          />
          <label
            htmlFor="empresa"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Empresa
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            id="email"
            className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            {...register('email')}
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <label
            htmlFor="message"
            className="block mb-2 text-sm  text-gray-500 dark:text-white"
          >
            Sua menssagem
          </label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-zinc-50 bg-zinc-950 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Deixe um comentário"
            {...register('text')}
          />
        </div>
        <button
          type="submit"
          className="text-lg text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-3 text-center flex items-center justify-center relative"
        >
          <img
            src={wpp}
            alt="whatsapp"
            className="object-cover w-10 absolute right-2"
          />
          Enviar Mensagem
        </button>
      </form>
    </div>
  )
}
