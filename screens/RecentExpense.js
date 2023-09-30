import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/ExpensesContext";
import { getDateMinusDays } from "../util/date";

export default function RecentExpense() {
  const expensesCtx = useContext(ExpensesContext)

  const recentExpenses = expensesCtx.expenses.filter((expense)=> {
    const today = new Date()
    const days7DaysAgo = getDateMinusDays(today , 7)

    return (expense.date  >= days7DaysAgo ) && (expense.date <= today)

  })

  return (
    <ExpensesOutput expenses={recentExpenses}  periodName="Last 7 Days" fallBackText="No expenses registered for the last 7 days."/>
    )
}
