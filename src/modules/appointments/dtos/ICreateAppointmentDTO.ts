export default interface ICreateAppointmentDto {
  provider_id: string;
  user_id: string;
  date: Date;
  period: string;
  task_type: string,
  customer_address: string,
  amount: string,
  payment_method: string,
  masked_number:string,
  note: string
}
