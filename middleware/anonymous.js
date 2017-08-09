export default function ({ store, redirect }) {
  if (store.getters.auth.authUser) {
    return redirect('/')
  }
}
