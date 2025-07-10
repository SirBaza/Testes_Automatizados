import { FastifyReply, FastifyRequest } from "fastify";
import { maiorSequenciaCollatz } from "../src/collatz/services/collatzService";

export const collatzController = {
  async post(request: FastifyRequest<{ Body: { limite: number } }>, reply: FastifyReply) {
    const { limite } = request.body;

    if (!limite || typeof limite !== "number" || limite < 1) {
      return reply.status(400).send({ error: "Limite inválido" });
    }

    const resultado = maiorSequenciaCollatz(limite);
    return reply.send({
      limite,
      numero: resultado.numero,
      tamanho: resultado.tamanho,
    });
  },
};
