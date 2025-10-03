import { useState } from 'react'
import { NuvoImporter } from '@getnuvo/importer-react';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const ingestroLicenseKey = import.meta.env.VITE_INGESTRO_LICENSE_KEY;

  return (
    <>
      <div>
        <NuvoImporter
          licenseKey={ingestroLicenseKey}
          settings={{
            developerMode: true,
            identifier: "product_data",
            columns: [
            ],
            multipleFileUpload: true,
          }}
          stepHandler={{
            uploadStep: async ({ parsedData, updateData }) => {
              console.log("uploadStep parsedData:", parsedData)

              updateData(parsedData)
              // updateData([
              //   {
              //     fileName: "MultipleSheetsExample.xlsx",
              //     sheetName: "Sheet1",
              //     data: [
              //       ["ID", "Name"],
              //       ["12345", "Updated"],
              //     ],
              //   },
              //   {
              //     fileName: "MultipleSheetsExample.xlsx",
              //     sheetName: "Sheet2",
              //     data: [
              //       ["ID", "Name"],
              //       ["12345", "Updated"],
              //     ],
              //   },
              // ])
            },
            headerStep: async ({ data, updateData }) => {
              console.log("headerStep data:", data)
            },
            mappingStep: async ({ data, updateData }) => {
              console.log("mappingStep data:", data)
            },
            reviewStep: async ({ data, updateData }) => {
              console.log("reviewStep data:", data)
            }
          }}
          onResults={(result, errors, complete, logs) => {
            console.log("Result:", result)
            console.log("Error rows:", errors)
            console.log("Logs:", logs)
            complete()
          }}
        />
      </div>
    </>
  )
}

export default App