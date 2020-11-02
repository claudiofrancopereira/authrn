interface Response {
    token: string;
    user: {
        name: string;
        email: string;
    }
}
export function signIn(): Promise<Response> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'sdfjkhaklsdfhaklsdhfkh29348r5y239148rhqui9dfh9qwehd',
                user: {
                    name: 'Claudio',
                    email: 'claudiofrancopereira@gmail.com',
                },
            });
        }, 2000);
    });
}
