(function (w, d) {
    var i = {
        interval: 60000, debug: false,
        eventTypes: ['mousemove', 'click', 'keydown', 'scroll'],
        pathname: null, url: null, escapeUrls: [], timerId: null, callback: null,
        init: function() {
            this.initPathname()
            // this.url = w._idleRedirectUrl || null
            // this.debug = w._idleDebug || false
            if (!this.callback) {
                if (!this.url || this.url == this.pathname) {
                    this.log('redirect url undefined or is the same as current, abort') 
                    return;
                }
                this.callback = this.redirect
            }
            // this.callback = this.callback || this.redirect
            
            // this.escapeUrls = w._idleEscapeUrl || [];
            if (this.escapeUrls.indexOf(this.pathname) > -1) {
                this.log('idel timer is disabled for this page')
                return;
            }
            // this.interval = w._idleInterval || this.interval
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
            if (i.debug) w.console.log(msg)
        }
    }
    w._idle = function() {
        var args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));
        if (!args[0]) return false;
        if (['url', 'escape', 'interval', 'callback', 'debug'].indexOf(args[0]) > -1) {
            i[args[0]] = args[1]
        } else {
            w.console.log('unsupported _idle parameter'+args[0])
        }
    };
    d.addEventListener('DOMContentLoaded', i.init.bind(i));
})(window, document);
