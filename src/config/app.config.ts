interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Bus Operator'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member', 'Bus Operator', 'Customer Service Representative'],
  tenantName: 'Organization',
  applicationName: 'Bus Ticket Booking Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read personal information',
    'Update personal information',
    'Delete personal account',
    'View available services',
  ],
  ownerAbilities: [
    'Manage operator information',
    'Update bus count',
    'Manage user information',
    'Manage organization information',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/86e21f12-12fa-40c5-a441-256051da1b5f',
};
