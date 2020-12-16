/*Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default (req, res) => {
//   res.statusCode = 200
//   res.json({ name: 'John Doe' })
// } */

import { NextApiRequest, NextApiResponse } from "next";

export default function (req:NextApiRequest, res:NextApiResponse) {
 // it Shoulfd Not Be a React Component

 res.json({status: 'OK'})

}
