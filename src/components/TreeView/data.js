const menuData = [
    {
        label : 'Home',
        to : '/'
    },
    {
        label : 'Profile',
        to : '/profile',
        children : [
            {
                label : 'Detail',
                to : 'detail',
                children : [
                    {
                        label : 'Location',
                        to : 'location'
                    },
                    {
                        label : 'Email',
                        to : 'email'
                    }
                ]
            },
            {
                label : 'Connections',
                to : 'connections',
                children : [
                    {
                        label : 'Friends',
                        to : 'friends'
                    }
                ]
            }
        ]
    },
    {
        label : 'Settings',
        to : '/settings',
        children : [
            {
                label : 'Account',
                to : 'account'
            },
            {
                label : 'Security',
                to : '/security',
                children : [
                    {
                        label : 'Login',
                        to : 'login'
                    },
                    {
                        label : 'Register',
                        to : 'register'
                    }
                ]
            }
        ]
    }
]

export default menuData