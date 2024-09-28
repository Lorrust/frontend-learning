import { Restaurant } from "./restaurant.model";

export interface Client {
  id?: number;
  nome: string;
  sobrenome: string;
  cpf: string;
  dataNascimento: Date;
  sexo: string;
  telefone: string;
  restaurante: Restaurant;
  dataCadastro?: string;
  quantidadeReservas: number;
  quantidadeValorGasto: number;
  flgBloqueado: boolean;
}
