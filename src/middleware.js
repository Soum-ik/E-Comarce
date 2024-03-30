import CheckMiddleware from "./utility/MiddlewareHelper";

export async function middleware(req, res) {
  if (req.nextUrl.pathname.startsWith("/api/product")) {
    return CheckMiddleware(req);
  }
  if (req.nextUrl.pathname.startsWith("/api/category")) {
    return CheckMiddleware(req);
  }
}
