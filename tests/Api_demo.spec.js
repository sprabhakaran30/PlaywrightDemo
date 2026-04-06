import{test,expect} from'@playwright/test';
import { request } from 'node:http';
test('api test',async({request})=>{

    const responce=await request.get("//new http");
    await expect(responce.status()).toBe(200);
}
)
