from flask import Flask, render_template, request, jsonify, make_response
from flask_sqlalchemy import SQLAlchemy
from marshmallow_sqlalchemy import SQLAlchemySchema
from marshmallow import fields
from flask_marshmallow import Marshmallow
from flask_cors import CORS
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.sql import func
import uuid

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://root:Jyhbr%^*&(Y&*k676567567@localhost/instagram_clone'
db = SQLAlchemy(app)
ma = Marshmallow(app)
CORS(app)


class User(db.Model):

	__tablename__ = 'user'
	user_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
	uuid = db.Column(UUID(as_uuid=True), default=uuid.uuid4)
	name = db.Column(db.String(50))
	profile_img = db.Column(db.String(250))
	surname = db.Column(db.String(50))
	email = db.Column(db.String(50))
	password = db.Column(db.String(50))

	def create(self):
		db.session.add(self)
		db.session.commit()
		return self

	def __init__(self, user_id,profile_img, UID, name, surname, email, password):
		self.user_id = user_id
		self.UID = UID
		self.profile_img = profile_img
		self.name = name
		self.surname = surname
		self.email = email
		self.password = password

	def __repr__(self):
		return '' % self.user_id


class UserSchema(SQLAlchemySchema):
	class Meta(SQLAlchemySchema.Meta):
		model = User
		load_instance = True
		sql_session = db.session
	user_id = fields.Number(dump_only=True)
	uuid = fields.UUID(required=True)
	profile_img = fields.String(required=True)
	name = fields.String(required=True)
	surname = fields.String(required=True)
	email = fields.String(required=True)
	password = fields.String(required=True)



class Post(db.Model):

	user_uuid = db.Column(db.String(50))
	user_name = db.Column(db.String(250))
	profile_img = db.Column(db.String(250))
	id = db.Column(db.Integer, primary_key=True, autoincrement=True)
	caption = db.Column(db.String(250))
	url = db.Column(db.String(250))
	created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())

	def create(self):
		db.session.add(self)
		db.session.commit()
		return self

	def __init__(self, user_uuid, caption, url,):
		self.user_uuid = user_uuid
		# self.id = id
		self.caption = caption
		self.url = url
		# self.created_at = created_at

	def __repr__(self):
		return '' % self.id


class PostSchema(SQLAlchemySchema):
	class Meta(SQLAlchemySchema.Meta):
		model = Post
		load_instance = True
		sqla_session = db.session
	# user = fields.Nested(UserSchema, many=True)
	user_uuid = fields.String(required=True)
	user_name = fields.String(required=True)
	profile_img = fields.String(required=True)

	id = fields.Number(dump_only=True)
	caption = fields.String(required=True)
	url = fields.String(required=True)
	created_at = fields.DateTime(dump_only=True)


class Comments(db.Model):
	id = db.Column(db.Integer, primary_key=True, autoincrement=True)
	user_id = db.Column(db.String(50))
	post_id = db.Column(db.String(50))
	comment_text = db.Column(db.String(250))
	created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())

	def create(self):
		db.session.add(self)
		db.session.commit()
		return self
	def __init__(self, user_id,post_id,comment_text):
		self.user_id = user_id
		self.post_id = post_id
		self.comment_text = comment_text

	def __repr__(self):
		return '' % self.id



class CommentsSchema(SQLAlchemySchema):
	class Meta(SQLAlchemySchema.Meta):
		model = Comments
		load_instance = True
		sqla_session = db.session
	id = fields.Number(dump_only=True)
	user_id = fields.String(required=True)
	post_id = fields.String(required=True)
	comment_text = fields.String(required=True)
	created_at = fields.String(dump_only=True)





@app.route('/user', methods=['GET'])
def users():
	get_user = User.query.all()
	user_schema = UserSchema(many=True)
	user = user_schema.dump(get_user)
	res = make_response(jsonify(user))
	res.headers.add("Access-Control-Allow-Origin", "*")
	return res

@app.route('/user/<int:_id>', methods=['GET'])
def users_id(_id):
	get_user = User.query.filter_by(user_id=_id)
	user_schema = UserSchema(many=True)
	user = user_schema.dump(get_user)
	res = make_response(jsonify(user))
	res.headers.add("Access-Control-Allow-Origin", "*")
	return res

@app.route('/post', methods=['GET'])
def posts():
	get_user = User.query.all()
	get_post = Post.query.all()
	# post_user = Post(user_uuid=get_post.user_uuid, user=get_user)
	#get_post = db.session.query(Post).join(User, Post.user_uuid == User.uuid).filter(Post.user_uuid=='4b1b0115-1bd4-11ee-9230-089798700233')
	post_schema = PostSchema(many=True)
	post = post_schema.dump(get_post)
	res = make_response(jsonify(post))
	res.headers.add("Access-Control-Allow-Origin", "*")
	return res

@app.route('/post/<user_uuid>', methods=['GET'])
def posts_by_user_id(user_uuid):
	get_post = Post.query.filter_by(user_uuid=user_uuid)
	post_schema = PostSchema(many=True)
	post = post_schema.dump(get_post)
	res = make_response(jsonify(post))
	res.headers.add("Access-Control-Allow-Origin", "*")
	return res


@app.route('/post/<int:_id>', methods=['GET'])
def posts_by_id(_id):
	get_post = Post.query.filter_by(id=_id)
	post_schema = PostSchema(many=True)
	post = post_schema.dump(get_post)
	res = make_response(jsonify(post))
	res.headers.add("Access-Control-Allow-Origin", "*")
	return res


@app.route('/post', methods=['POST'])
def create_posts():
	data = request.get_json()
	post_schema = PostSchema()

	post = post_schema.load(data)
	res = post_schema.dump(post.create())

	return make_response(jsonify(res))


@app.route('/comments', methods=['GET'])
def get_comment():
	get_comments = Comments.query.all()
	comments_schema = CommentsSchema(many = True)
	comments = comments_schema.dump(get_comments)
	res = make_response(jsonify(comments))
	res.headers.add("Access-Control-Allow-Origin", "*")
	return res\

@app.route('/comments/<int:id>', methods=['GET'])
def get_comment_by_id(id):
	get_comments = Comments.query.filter_by(post_id=id)
	comments_schema = CommentsSchema(many = True)
	comments = comments_schema.dump(get_comments)
	res = make_response(jsonify(comments))
	res.headers.add("Access-Control-Allow-Origin", "*")
	return res

@app.route('/', methods=['GET'])
def hello_world():
	return 'Hello World yesssss'

if __name__ == '__main__':
	app.debug = True
	app.run()
