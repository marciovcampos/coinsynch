import Container from 'components/Container'
import { Table } from 'components/Table'

import * as S from './styles'

function TopCryptos() {
  return (
    <Container>
      <S.TopCryptosContainer>
        <S.Title>Top Cryptos</S.Title>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Crypto</th>
              <th>Price</th>
              <th>Change</th>
              <th>Trade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>02</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>03</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>04</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>05</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </S.TopCryptosContainer>
    </Container>
  )
}

export default TopCryptos
