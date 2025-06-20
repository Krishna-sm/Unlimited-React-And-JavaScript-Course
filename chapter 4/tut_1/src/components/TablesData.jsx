import React from 'react'

const TablesData = () => {
  return (
    <>
        <table border={1} width={'50%'}  align='center'>
                <tr>
                    <th colSpan={3}>Student Record</th>
                </tr>
             <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Rohan</td>
                <td>Rohan@gmail.com</td>
            </tr>
             <tr>
                <td>2</td>
                <td>Sohan</td>
                <td>Sohan@gmail.com</td>
            </tr>
                <tr>
                <td>3</td>
                <td>Krishna</td>
                <td>Krishna@gmail.com</td>
            </tr>
        </table>
    </>
  )
}

export default TablesData