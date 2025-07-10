import { collatzController } from "../src/collatz/controller/collatzController";
import { FastifyRequest, FastifyReply } from "fastify";

describe("CollatzController", () => {
  it("should return the correct number and sequence size", async () => {
    const request = {
      body: { limite: 100 },
    } as FastifyRequest<{ Body: { limite: number } }>;

    const reply = {
      send: jest.fn(),
      status: jest.fn().mockReturnThis(),
    } as unknown as FastifyReply;

    await collatzController.post(request, reply);

    expect(reply.send).toHaveBeenCalledWith({
      limite: 100,
      numero: 97,
      tamanho: 119,
    });
  });

  it("should return 400 for invalid input", async () => {
    const request = {
      body: { limite: 0 },
    } as FastifyRequest<{ Body: { limite: number } }>;

    const reply = {
      send: jest.fn(),
      status: jest.fn().mockReturnThis(),
    } as unknown as FastifyReply;

    await collatzController.post(request, reply);

    expect(reply.status).toHaveBeenCalledWith(400);
    expect(reply.send).toHaveBeenCalledWith({ error: "Limite inválido" });
  });
});
