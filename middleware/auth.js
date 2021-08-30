export default function(ctx) {
  const hasToken = ctx.store.state.auth.token;

  if (!hasToken) {
    ctx.redirect("/auth/login");
  }
}
