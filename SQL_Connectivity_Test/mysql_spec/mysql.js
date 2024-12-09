import { executeQuery } from "../../utils/mysqlHelper";

describe('Database Interaction Test',async () => {



    it('should fetch data from the database', async () => {


        const query = 'SELECT * FROM jdbcdemo';
        const results = await executeQuery(query);  // Fetch user with id 1
        console.log(results);  // Output the result

        // Assert the data from DB
        // expect(results[0].name).toBe('John Doe');
    });


});