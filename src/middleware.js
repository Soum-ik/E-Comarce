import CheckMiddleware from "./utility/MiddlewareHelper";

export async function middleware(req, res) {
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    return CheckMiddleware(req);
  }
}
