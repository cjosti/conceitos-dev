import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        email: 'cleitonosti@gmail.com', 
        password:'code2019',
        techs: [
            'NodeJS',
            'ReactJs',
            'React Native',
            {title: 'JavaScript', experience: 100}]
    });
    return response.json(user);
}