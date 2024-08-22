import { makeValidateCheckInUseCase } from '@/use-cases/factories/make-validate-check-in-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function validade(request: FastifyRequest, reply: FastifyReply) {
  const validadeParamsSchema = z.object({
    checkInId: z.string().uuid(),
  })

  const { checkInId } = validadeParamsSchema.parse(request.params)

  const validateCheckInUseCase = makeValidateCheckInUseCase()

  await validateCheckInUseCase.execute({
    checkInId,
  })

  return reply.status(204).send()
}
