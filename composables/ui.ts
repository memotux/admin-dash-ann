import { Auth } from "aws-amplify";

export const useUi = () => useState('ui', () => ({
  drawer: true,
  rail: false,
  isAuth: false
}))

export const useUser = async () => {
  try {
    const user = await Auth.currentAuthenticatedUser()

    return user
  } catch (error) {
    console.error(error);
  }
}

export const authListener = (data: any) => {
  const ui = useUi()

  console.log('auth listener payload: ', data.payload.event);


  if (data.payload.event === 'configured') {
    if (process.server) return

    Auth.currentAuthenticatedUser().then((user) => {
      ui.value.isAuth = Boolean(user?.username)
    }).catch((err) => {
      console.error('error on current auth user: %s', err);
      console.log('process server:', process.server)
    })
  } else {
    switch (data.payload.event) {
      case 'signIn':
      case 'autoSignIn':
        ui.value.isAuth = true
        break
      case 'signOut':
        ui.value.isAuth = false
        break
      default:
        ui.value.isAuth = false
    }
  }
}

export const authLogOut = async () => {
  try {
    await Auth.signOut();
  } catch (error) {
    console.error('error signing out: ', error);
  }
}