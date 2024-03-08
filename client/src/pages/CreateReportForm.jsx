import React from 'react'
import CreatePageForm from '../components/CreatePageForm'
import Form from '../components/Reports/Form'

export const CreateReportForm = () => {
  const title = "Create Report"
  const subtitle = "Form to create reports"
  const link = "/reports"
  const form = <Form />
  return (
    <CreatePageForm link={link} title={title} subtitle={subtitle} form={form}/>
  )
}
