# from flask import Flask

# app = Flask(__name__) # create an instance of the Flask class

# @app.route('/') # route() decorator to tell Flask what URL should trigger our function
# def hello_world():
#     return 'Hello, World!'

# if __name__ == '__main__': # to run the application on the development server
#     app.run(debug=True)


from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def home():
    return 'This is the home page!'

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        # TODO: Store user data (e.g., in a database)
        print(f"Registering user: {username}, password: {password}") # For testing
        return "User registered successfully!" # Replace with redirect later
    return render_template('register.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        # TODO: Authenticate user
        print(f"Logging in user: {username}, password: {password}") # For testing
        return "User logged in successfully!" # Replace with redirect later
    return render_template('login.html')

if __name__ == '__main__':
    app.run(debug=True)