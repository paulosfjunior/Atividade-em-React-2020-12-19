import { StyleSheet } from 'react-native'

export const LoginStyles = StyleSheet.create({
  titulo: {
    flex: 1,
    justifyContent: 'center'
  },
  tituloText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 40,
    width: '90%',
  },
  btnLogin: {
    alignItems: 'center',
    backgroundColor: '#047857',
    borderRadius: 5,
    marginTop: 10,
    padding: 10,
    width: '95%',
  },
  btnLoginText: {
    color: '#D1FAE5',
    fontSize: 16,
    fontWeight: 'bold',
  },
  btnRegistrar: {
    alignItems: 'center',
    marginTop: 10,
    width: '95%',
  },
  btnRegistrarText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '300',
  },
  btnLogout: {
    alignItems: 'center',
    backgroundColor: '#047857',
    borderRadius: 5,
    marginTop: 10,
    padding: 10,
    width: '95%',
  },
  btnLogoutText: {
    color: '#D1FAE5',
    fontSize: 16,
    fontWeight: 'bold',
  },
})
