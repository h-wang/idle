(function (w, d) {
    var i = {
        interval: 60000, debug: false,
        eventTypes: ['mousemove', 'click', 'keydown', 'scroll'],
        pathname: null, url: null, escapeUrls: [], timerId: null, callback: null,
        init: function() {
            this.initPathname()
            this.callback = w._idleCallback || this.redirect
            this.url = w._idleRedirectUrl || null
            this.debug = w._idleDebug || false
            if (w._idleCallback) {
                this.callback = w._idleCallback
            } else {
                if (!this.url || this.url == this.pathname) {
                    this.log('redirect url undefined or is the same as current, abort') 
                    return;
                }
                this.callback = this.redirect
            }

            this.escapeUrls = w._idleEscapeUrl || [];
            if (this.escapeUrls.indexOf(this.pathname) > -1) {
                this.log('idel timer is disabled for this page')
                return;
            }
            this.interval = w._idleInterval || this.interval
            this.eventTypes.forEach(this.listen)
            this.tick()
        },
        listen: function(eventType) {
            d.addEventListener(eventType, i.tick)
        },
        unlisten: function(eventType) {
            d.removeEventListener(eventType, i.tick)
        },
        act: function () {
            i.callback()
            i.eventTypes.forEach(i.unlisten)
            i.log('idle timer disarmed')
        },
        tick: function() {
            w.clearTimeout(i.timerId);
            i.timerId = w.setTimeout(i.act, i.interval);
            i.log('idle timer restarted ...')
        },
        redirect: function() {
            i.log('idle timer timeout, bye')
            d.location.href = i.url;
        },
        initPathname: function() {
            var parser = d.createElement('a');
            parser.href = ''
            this.pathname = parser.pathname
            this.log('pathname: '+this.pathname)
        },
        log: function(msg) {
            if (i.debug) console.log(msg)
        }
    }
    d.addEventListener('DOMContentLoaded', i.init.bind(i));
})(window, document);
