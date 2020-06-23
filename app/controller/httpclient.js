'use strict';

const fs = require('fs');
const request = require('request');
const FormStream = require('formstream');
const Controller = require('egg').Controller;

class HttpclientController extends Controller {
  async home () {
    const { ctx, app } = this
    let url = 'https://www-openapi.hualala.com/doc/getAllShop'

    console.log('请求URL：', url)

    let timestamp = 1592905299054
    const paramSend = {
      timestamp: timestamp,
      appKey: "1872",
      version: "2.0",
      requestBody: "",
      signature: "signS"
    }

    let headers = {
      traceID: '2faae504058-26863ab72bsb815929046638141',
      groupID: 37087,
    }

    /**
     * 返回 403 因为没有接收到任何请求数据
     */

    const result = await ctx.curl(url, {
      method: 'POST',
      contentType: 'form',
      data: paramSend,
      headers: headers,
    });
    


    /**
     * 返回400 显示业务错误，已经接收到数据
     */
    // const result = await request.post(url, { form: paramSend, headers: headers })
    ctx.body = result 

  }
}

module.exports = HttpclientController;
