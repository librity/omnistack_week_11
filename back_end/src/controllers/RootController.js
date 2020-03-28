class RootController {
  test(req, res) {
    return res.json({
      application: 'Be the Hero',
      event: 'RocketSeat - Semana Omnistack 11',
      message: 'Hello World',
    });
  }
}

export default new RootController();
