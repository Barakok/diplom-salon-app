const allServices = [
  {
    name: "Парикмахерские услуги",
    service: [
      {
        serviceName: "Парикмахерские услуги",
        miniService: [
          {
            name: "Стрижка/Сушка",
            description: "1 длина, 2 длины, 3 длины, 4 длины, Стрижка чёлки, Стрижка чёлки (фигурная), Сушка волос феном, Полировка волос",
            duration: 40,
            price: 200
          },
          {
            name: "Стайлинг",
            description: "Мытьё головы, Бальзам, Маска (лечение), Лак, Пена, Стайлинг",
            duration: 40,
            price: 200
          }
        ]
      },
      {
        serviceName: "Укладки",
        miniService: [
          {
            name: "ВЫТЯГИВАНИЕ ВОЛОС (БЕЗ ПРЕПАРАТОВ)",
            description: "1 длина, 2 длины, 3 длины",
            duration: 40,
            price: 200
          },
          {
            name: "УКЛАДКА В БИГУДИ (РАЗБОРКА)",
            description: "1 длина, 2 длины, 3 длины",
            duration: 40,
            price: 200
          },
          {
            name: "УКЛАДКА ПЛОЙКОЙ",
            description: "1 длина, 2 длины, 3 длины",
            duration: 40,
            price: 200
          },
          {
            name: "УКЛАДКА НА ДИФФУЗОР",
            description: "1 длина, 2 длины, 3 длины",
            duration: 40,
            price: 200
          },
          {
            name: "УКЛАДКА НА УТЮЖОК",
            description: "1 длина, 2 длины, 3 длины",
            duration: 40,
            price: 200
          },
          {
            name: "ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ",
            description: "1 длина, 2 длины, 3 длины",
            duration: 40,
            price: 200
          }
          ]
      },
      {
        serviceName: "Окраска",
        miniService: [
          {
            name: "ОКРАСКА КРАСКОЙ КЛИЕНТА",
            description: "1 длина, 2 длины, 3 длины",
            duration: 40,
            price: 200
          },
          {
            name: "ОКРАСКА КРАСКОЙ САЛОНА FLEUR",
            description: "1 длина, 2 длины, 3 длины",
            duration: 40,
            price: 200
          },
          {
            name: "ХИМИЧЕСКАЯ ЗАВИВКА",
            description: "1 длина, 2 длины, 3 длины",
            duration: 40,
            price: 200
          },
          {
            name: "ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ",
            description: "1 длина, 2 длины, 3 длины",
            duration: 40,
            price: 200
          }]
      },
      {
        serviceName: "Наращивание волос, мелирование, колорирование",
        miniService: [
          {
            name: "МЕЛИРОВАНИЕ",
            description: "1 длина, 2 длины, 3 длины",
            duration: 40,
            price: 200
          },
          {
            name: "КОЛОРИРОВАНИЕ",
            description: "1 длина, 2 длины, 3 длины",
            duration: 40,
            price: 200
          },
          {
            name: "ОСВЕТЛЕНИЕ ВОЛОС",
            description: "1 длина, 2 длины, 3 длины",
            duration: 40,
            price: 200
          },
          {
            name: "НАРАЩИВАНИЕ ВОЛОС",
            description: "1 длина, 2 длины, 3 длины",
            duration: 40,
            price: 200
          },
          {
            name: "ШЁЛКОВОЕ ОБЁРТЫВАНИЕ",
            description: "1 длина, 2 длины, 3 длины",
            duration: 40,
            price: 200
          }]
      }
    ]
  },
  {
    name: "Ногтевой сервис",
    service: [
      {
        serviceName: "Ногтевой сервис: маникюр и педикюр",
        miniService: [
          {
            name: "МАНИКЮР",
            description: "Классический маникюр, Мужской маникюр, Массаж кистей рук, Лечебное покрытие на натуральные ногти, Покрытие лаком натуральных ногтей",
            duration: 40,
            price: 200
          },
          {
            name: "УКРЕПЛЕНИЕ F.O.X.",
            description: "Под гель, Натуральный ноготь, Коррекция",
            duration: 40,
            price: 200
          },
          {
            name: "ПОКРЫТИЕ ГЕЛЬ-ЛАКОМ",
            description: "Покрытие гель-лаком, Френч, Снятие",
            duration: 40,
            price: 200
          },
          {
            name: "МОДЕЛИРОВАНИЕ НОГТЕЙ",
            description: "Моделирование акрил (стекло). I - V (укрепление)",
            duration: 40,
            price: 200
          },
          {
            name: "КОРРЕКЦИЯ АКРИЛОВЫХ НОГТЕЙ",
            description: "Моделирование акрил (стекло). I - V (укрепление)",
            duration: 40,
            price: 200
          },
          {
            name: "МОДЕЛИРОВАНИЕ ФРЕНЧ (ПРОЗРАЧНО-РОЗОВЫЙ)",
            description: "Моделирование акрил (стекло). I - V (укрепление)",
            duration: 40,
            price: 200
          },
          {
            name: "ПЕДИКЮР",
            description: "Моделирование акрил (стекло). I - V (укрепление)",
            duration: 40,
            price: 200
          }
        ]
      }
    ]
  },
  {
    name: "НАРАЩИВАНИЕ РЕСНИЦ",
    service: [
      {
        serviceName: "НАРАЩИВАНИЕ РЕСНИЦ",
        miniService: [
          {
            name: "НАРАЩИВАНИЕ РЕСНИЦ",
            description: "Классический маникюр, Мужской маникюр, Массаж кистей рук, Лечебное покрытие на натуральные ногти, Покрытие лаком натуральных ногтей",
            duration: 40,
            price: 200
          }
        ]
      }
    ]
  },
  {
    name: "Лазерная эпиляция",
    service: [
      {
        serviceName: "Лазерная эпиляция",
        miniService: [
          {
            name: "ЛАЗЕРНАЯ ЭПИЛЯЦИЯ (ЗОНА)",
            description: "Классический маникюр, Мужской маникюр, Массаж кистей рук, Лечебное покрытие на натуральные ногти, Покрытие лаком натуральных ногтей",
            duration: 40,
            price: 200
          }
        ]
      }
    ]
  },
  {
    name: "Косметология",
    service: [
      {
        serviceName: "Косметология",
        miniService: [
          {
            name: "Чистка лица",
            description: "Классический маникюр, Мужской маникюр, Массаж кистей рук, Лечебное покрытие на натуральные ногти, Покрытие лаком натуральных ногтей",
            duration: 40,
            price: 200
          },
          {
            name: "Контурная пластика губ",
            description: "Классический маникюр, Мужской маникюр, Массаж кистей рук, Лечебное покрытие на натуральные ногти, Покрытие лаком натуральных ногтей",
            duration: 40,
            price: 200
          },
          {
            name: "Биоревитализация",
            description: "Классический маникюр, Мужской маникюр, Массаж кистей рук, Лечебное покрытие на натуральные ногти, Покрытие лаком натуральных ногтей",
            duration: 40,
            price: 200
          },
          {
            name: "Ботокс",
            description: "Классический маникюр, Мужской маникюр, Массаж кистей рук, Лечебное покрытие на натуральные ногти, Покрытие лаком натуральных ногтей",
            duration: 40,
            price: 200
          }
        ]
      }
    ]
  }
  ];

module.exports = allServices;