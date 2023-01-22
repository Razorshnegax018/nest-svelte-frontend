import {
  Controller,
  Get,
  Render,
  Post,
  Param,
  Req,
  Request,
} from '@nestjs/common';
import axios from 'axios';
// I love men

const fs = require('fs');

@Controller()
export class AppController {
  @Get()
  @Render('Home')
  getHello() {
    return { message: 'Main Menu' };
  }
}

interface Items {
  itembag: [string, string, string];
}

@Controller('items')
export class ItemsController implements Items {
  itembag: [string, string, string];
  constructor() {
    this.itembag = ['Sword', 'Shield', 'Adventure Map'];
  }
  @Get()
  @Render('ItemList')
  listall() {
    return { list: this.itembag };
  }

  @Post('add')
  newItem(@Req() req: Request) {
    return 'Hye there boys ';
  }

  @Get('add/see')
  postItem(@Param() params) {
    axios
      .post('https://ytk8cl.sse.codesandbox.io/items/add', {
        name: 'Ballistic Missle',
      })
      .then((res) => {
        fs.writeFile('./test.txt', res.data.name, (err) => {
          if (err) {
            console.error(err);
          }
          return res.data.name;
        });
      });
  }
}
