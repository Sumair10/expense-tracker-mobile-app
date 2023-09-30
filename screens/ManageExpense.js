import { useContext, useLayoutEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from '../components/UI/Button'
import IconButton from '../components/UI/IconButton'
import { GlobalStyles } from '../constants/Styles'
import { ExpensesContext } from '../store/ExpensesContext'

export default function ManageExpense({ route, navigation }) {

  const expenseCtx = useContext(ExpensesContext)

  const editedExpenseId = route.params?.expenseId
  const isEditing = !!editedExpenseId

  useLayoutEffect(() => {
    console.log(isEditing)
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    })
  }, [isEditing, navigation])


  const deleteExpenseHandler = () => {
    expenseCtx.deleteExpense(editedExpenseId)
    navigation.goBack()
  }

  const cancelHandler =()=>{
    navigation.goBack()

  }
  const confirmHandler =()=>{
    if(isEditing){
      expenseCtx.updateExpense(
        editedExpenseId,
        {
          description :'Test!!!!!!',
          amount :12.44,
          date:  new Date('2022-02-22')
        }
      )
    }
    else{
      expenseCtx.addExpense({
        description :'Test',
        amount :199,
        date: new Date('2023-09-30')
      })
    }
    navigation.goBack()

  }

  return (
    <View style={styles.container}>
      <View style={styles.buttons }>
        <Button style={styles.button} mode ="flat" onPress={cancelHandler}>Cancel</Button>
        <Button style={styles.button} onPress={confirmHandler}>{isEditing ? 'Update' : 'Add'}</Button>
      </View>
      {isEditing && (
      <View style={styles.deleteContainer}>
        <IconButton icon="trash" color={GlobalStyles.colors.error500} size={36} onPress={deleteExpenseHandler} />
      </View>)}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800
  },
  buttons : {
    flexDirection :'row',
    justifyContent :'center',
    alignItems :'center'
  }, 
  button :{
    minWidth :120,
    marginHorizontal :8
  } ,
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center'
  }
})
