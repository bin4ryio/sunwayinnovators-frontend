export default function ({ store, redirect }) {
  // If user not connected, redirect to /
  if (!store.state.auth.authUser) {
    return redirect('/')
    // error({
    //   message: 'You are not logged in.',
    //   statusCode: 403
    // })
  }
}
