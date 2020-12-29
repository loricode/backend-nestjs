import { Controller, Get, Post, Res, Req, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { Response, Request } from 'express';

@Controller()
export class AppController {

  constructor(private readonly appService: AppService) {}

  @Get("/product/")
  async getProducts(@Res() res: Response) {
    const data = await this.appService.getProducts();
    return res.json({ "products": data } )
  }

  @Post("/product/")
  async addProduct(@Req() req: Request, @Res() res: Response ) {
     const obj = req.body
     const data = await this.appService.addProduct(obj);
     return res.json({ "msg": data } )
  }

 @Delete('/product/:id')
 async deleteProduct(@Req() req: Request, @Res() res: Response ) {
    const { id } = req.params;
    const data = await this.appService.deleteProduct(id);
    return res.json({ "msg": data } )
  }





  @Get()
  getHello():string {
     return "hello word";
  }

}
