export class InternetNotifierModel {
  public offlineListener(
    listener: (_ev: Event) => unknown,
    options?: boolean | AddEventListenerOptions
  ) {
    window.addEventListener('offline', listener, options);
  }

  public onlineListener(
    listener: (_ev: Event) => unknown,
    options?: boolean | AddEventListenerOptions
  ) {
    window.addEventListener('online', listener, options);
  }

  public unsubscribeOnline(listener: (_ev: Event) => unknown) {
    window.removeEventListener('online', listener);
  }

  public unsubscribeOffline(listener: (_ev: Event) => unknown) {
    window.removeEventListener('offline', listener);
  }
}
