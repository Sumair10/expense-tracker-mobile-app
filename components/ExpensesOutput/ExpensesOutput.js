
import { StyleSheet, View } from 'react-native'
import { GlobalStyles } from '../../constants/Styles'
import ExpensesList from './ExpensesList'
import ExpensesSummary from './ExpensesSummary'

const DUMMY_EXPENSES =[
    {
        id : 'e1',
        description : 'A pair of shoes',
        amount : 59.99,
        date : new Date('2021-12-19')
    },
    {
        id : 'e2',
        description : 'A pair of banana',
        amount :12.9232329,
        date : new Date('2021-02-30')
    },
    {
        id : 'e3',
        description : 'A brand new House',
        amount :4.99,
        date : new Date('2023-12-09')
    },
    {
        id : 'e4',
        description : 'a new Book',
        amount :100.99,
        date : new Date('2022-02-22')
    },
]

export default function ExpensesOutput({ expenses, periodName }) {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={periodName}/>
            <ExpensesList expenses={DUMMY_EXPENSES}/>
        </View>
    )
}

const styles =StyleSheet.create({
    container : {
        flex: 1,
        paddingHorizontal:24,
        paddingTop :24,
        paddingBottom:0,
        backgroundColor :GlobalStyles.colors.primary700
    }
})