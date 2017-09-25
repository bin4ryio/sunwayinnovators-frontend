export default function ({ store, redirect }) {
  // If user not connected, redirect to /
  if (!store.state.auth.user) {
    return redirect('/')
    // error({
    //   message: 'You are not logged in.',
    //   statusCode: 403
    // })
  }
}
