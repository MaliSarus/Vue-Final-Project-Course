import Vue from 'vue'

export const loadData = ({commit}) => {
  Vue.http.get('data.json')
    .then(response => response.json()) //Если получили ответ, то перерабатываем из JSON в JS
    .then(data => {
      if (data) { //Если есть данные
        const stocks = data.stocks;
        console.log(stocks);
        const funds = data.funds;
        const stockPortfolio = data.stockPortfolio;

        const portfolio = {
          stockPortfolio,
          funds
        };

        commit('SET_STOCKS', stocks);
        commit('SET_PORTFOLIO', portfolio);


      }
    })
}
