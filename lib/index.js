/**
 * A Simple Email Service Package Supporting Multiple Providers
 *
 * @package zhhan2Emailer
 * @author zhhan2 <hanzuohao123@gmail.com>
 */
const sender = require('./sender');

module.exports = (options, callback) => {
  // @TODO validations on options

  const errHandler = (error) => {};
  const successHandler = (response) => {};
  sender.send(options, (err, result) => {
    if (err) return errHandler(err);
    return successHandler(result);
  });
};
