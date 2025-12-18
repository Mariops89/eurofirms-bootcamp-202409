import { url, z, ZodType } from "zod"
import { ValidationError } from "./errors"

function validateWithSchema<T>(schema: ZodType<T>, data: unknown, explain = "data") {
    const result = schema.safeParse(data)

    if (result.success)
        return

    throw new ValidationError(`invalid ${explain}: (${result.error.issues[0]?.message || "validation failed"}`)
}

const EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

const URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/

const ID_REGEX = /^[0-9a-fA-F]{24}$/


const nameSchema = z.string().min(1).max(30)
const emailSchema = z.string().refine(value => EMAIL_REGEX.test(value), { message: "wrong email format" })
const usernameSchema = z.string().min(3).max(30)
const passwordSchema = z.string().min(8).max(100)
const idSchema = z.string().refine(value => ID_REGEX.test(value), { message: "wrong id format, not a 24-character hexadecimal string" })
const urlSchema = z.string().refine(value => URL_REGEX.test(value), { message: "wrong url format" })
const textSchema = z.string().min(1).max(500)


export const validate = {
    name(name: string, explain = "name") {
        validateWithSchema(nameSchema, name, explain)
    },
    email(email: string, explain = "email") {
        validateWithSchema(emailSchema, email, explain)
    },
    username(username: string, explain = "username") {
        validateWithSchema(usernameSchema, username, explain)
    },
    password(password: string, explain = "password") {
        validateWithSchema(passwordSchema, password, explain)
    },
    id(id: string, explain = "id") {
        validateWithSchema(idSchema, id, explain)
    },
    url(url: string, explain = "url") {
        validateWithSchema(urlSchema, url, explain)
    },
    text(text: string, explain = "text") {
        validateWithSchema(textSchema, text, explain)
    },
    objectId(objectId: string, explain = "objectId") {
        validateWithSchema(idSchema, objectId, explain)
    },
    level(level: number, explain = "level") {
        validateWithSchema(z.number().min(0), level, explain)
    },
    space(space: string, explain = "space") {
        validateWithSchema(z.string().min(1).max(10), space, explain)
    },
    checkin(checkin: Date, explain = "checkin") {
        validateWithSchema(z.date(), checkin, explain)
    },
    checkout(checkout: Date, explain = "checkout") {
        validateWithSchema(z.date(), checkout, explain)
    },
    vehicleRegistration(vehicleRegistration: string, explain = "vehicle registration") {
        validateWithSchema(z.string().min(1).max(20), vehicleRegistration, explain)
    }
}