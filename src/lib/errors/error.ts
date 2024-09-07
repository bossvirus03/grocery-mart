import { HttpStatusCode } from "axios";

export class CustomError extends Error {
  status: HttpStatusCode;
  messageFields?: string;
  constructor(message: string, status: HttpStatusCode, messageFields?: string) {
    super(message);
    this.status = status;
    this.messageFields = messageFields;
  }
}
