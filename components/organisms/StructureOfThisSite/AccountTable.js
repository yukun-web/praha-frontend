import { useAccounts } from './useAccounts'
import { Caption, Code, Table, Tbody, Td, Th, Thead, Tr } from '../../atoms'

export const AccountTable = () => {
  const accounts = useAccounts()

  return (
    <div className='overflow-auto pt-4'>
      <div className="min-w-[500px]">
        <Table>
          <Caption>登録済みユーザ</Caption>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>メールアドレス</Th>
              <Th>パスワード</Th>
              <Th>会員ランク</Th>
            </Tr>
          </Thead>
          <Tbody>
            {accounts.map((account) => (
              <Tr key={account.id}>
                <Th>{account.id}</Th>
                <Td>
                  <Code>{account.email}</Code>
                </Td>
                <Td>
                  <Code>{account.password}</Code>
                </Td>
                <Td>{account.type}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>
    </div>
  )
}
