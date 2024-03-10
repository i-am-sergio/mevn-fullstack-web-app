import type { AxiosResponse } from 'axios'
import type { Task } from '@/interfaces/Task'
import axios from './axios'

export const createTask = async (task: Task) => await axios.post('/', task)

export const getTasks = async () : Promise<AxiosResponse<Task[]>> => await axios.get('/')

export const getTask = async (id: string) : Promise<AxiosResponse<Task>>=> await axios.get(`/${id}`)

export const updateTask = async (task: Task) => await axios.put(`/${task._id}`, task)

export const deleteTask = async (id: string) :Promise<AxiosResponse<Task>> => await axios.delete(`/${id}`)