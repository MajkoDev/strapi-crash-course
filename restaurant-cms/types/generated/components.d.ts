import type { Schema, Attribute } from '@strapi/strapi';

export interface RestaurantInfoOpenningHours extends Schema.Component {
  collectionName: 'components_restaurant_info_openning_hours';
  info: {
    displayName: 'Openning Hours';
    icon: 'clock';
  };
  attributes: {
    Hours: Attribute.String;
    Days: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'restaurant-info.openning-hours': RestaurantInfoOpenningHours;
    }
  }
}
