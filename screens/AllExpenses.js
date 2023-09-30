import { useContext } from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { ExpensesContext } from '../store/ExpensesContext'

export default function AllExpenses() {

  const expensesCtx = useContext(ExpensesContext)

  return (
  <ExpensesOutput expenses={expensesCtx.expenses} periodName="Total" fallBackText="No  registered sxpenses found"/>
  )
}
