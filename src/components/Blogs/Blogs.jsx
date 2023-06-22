import bg from "../../assets/images/blog-bg.jpg";

const Blogs = () => {
  document.title = "ToysRush | Blog";

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="container pb-3 pt-5">
        <h2 className="text-white text-center">
          Assignment 11 Questoin Answare Page
        </h2>
        <hr className="text-white" />

        <div className="text-white">
          <h4>
            1) What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h4>
          <p>
            <strong>Ans:</strong> Access tokens and refresh tokens are two types
            of credentials used in authentication. Access tokens are used to
            access protected resources, while refresh tokens are used to obtain
            new access tokens when they expire. They work together to provide
            secure access to an API while minimizing the number of times the
            user must authenticate. On the client-side, they should be stored
            securely, ideally in an encrypted form, using best practices to
            minimize the risk of token theft or misuse.
          </p>
        </div>
        <hr className="text-white" />

        <div className="text-white">
          <h4>2) Compare SQL and NoSQL databases?</h4>
          <p>
            <strong>Ans: </strong>
            SQL databases use a table-based data model, where data is organized
            in a structured manner with predefined schemas. NoSQL databases, on
            the other hand, do not have a fixed schema and use various models
            like document-based, key-value pairs or graph-based. SQL databases
            usually don't scale horizontally very well, while NoSQL databases
            can easily scale by adding more nodes to the database.
          </p>
        </div>
        <hr className="text-white" />

        <div className="text-white">
          <h4>3) What is express js? What is Nest js?</h4>
          <p>
            <strong>Ans:</strong> Express is a popular open-source web framework
            for Node.js, which is used to develop server-side applications. It
            provides a set of tools for building web applications and APIs
            quickly and easily. NestJS is a relatively new open-source web
            framework for Node.js that provides an architecture for building
            scalable and efficient server-side applications. It is built upon
            the Express library, but adds additional features and functionality
            such as dependency injection, modular architecture, and TypeScript
            support. NestJS is designed to be highly flexible and customizable,
            making it well-suited for large-scale enterprise applications.{" "}
          </p>
        </div>
        <hr className="text-white" />
        <div className="text-white">
          <h4>4) What is MongoDB aggregate and how does it work?</h4>
          <p>
            <strong>Ans:</strong> MongoDB's aggregate function is used to
            perform data processing operations on a collection of documents. It
            allows you to group, filter, and transform data in a very powerful
            and flexible way. The aggregate function works by taking a pipeline
            of stages that are applied to the documents in the collection
            one-by-one. Each stage can perform a specific operation on the
            documents, such as filtering, grouping, sorting, or transforming
            them in some way.
          </p>
        </div>
        <hr className="text-white" />
      </div>
    </div>
  );
};

export default Blogs;
